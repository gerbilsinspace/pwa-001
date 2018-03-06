import Client, { where, field } from 'sequoia-client-sdk';
import {
  setTenant,
  setSession,
  setEndpoint,
  setData
} from './actions';

let client;
let endpoint;
let dp;

async function setupClient(store) {
  const { dispatch, getState } = store;
  dp = dispatch;
  const username = process.env.REACT_APP_USERNAME;
  const registryUrl = process.env.REACT_APP_REGISTRY_URL;
  let error;

  client = new Client(
    username,
    registryUrl
  );

  const tenant = await client.setTenancy(process.env.REACT_APP_TENANT).catch(err => {
    error = err;
  });

  if (!tenant) {
    error = 'no tenant';
  }

  if (error) {
    console.log(error);
    return;
  }

  dp(setTenant(tenant));

  const session = await client.login(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD, { url: process.env.REACT_APP_TOKEN_URL }).catch(err => {
    error = err
  });

  if (!session) {
    error = 'no session';
  }

  if (error) {
    console.log(error);
    return;
  }

  dp(setSession(session));

  const metadataService = await client.service('metadata').catch(err => {
    error = err
  });

  if (!metadataService || !metadataService.resourcefulEndpoint) {
    error = 'no metadataService';
  }

  if (error) {
    console.log(error);
    return;
  }

  endpoint = await metadataService.resourcefulEndpoint('contents');

  if (!endpoint) {
    error = 'no endpoint';
  }

  if (error) {
    console.log(error);
    return;
  }

  if (!endpoint) return 'no endpoint';

  dp(setEndpoint(endpoint));

  setCollection(getState().filter, getState().page);
}

export const setCollection = async (filter, page) => {
  const collection = await endpoint.browse(where(field('title').startsWith(filter || '')).fields(
    'title',
    'mediumSynopsis',
    'duration',
    'ref',
    'type',
    'owner',
  ).include('assets').page(page || 1)
    .perPage(10)
    .orderByUpdatedAt()
    .desc()
    .count()).catch(err => {
      console.log(err);
    });
  const data = collection.rawData.contents;
  dp(setData(data));
}

export const createData = async data => {
  const newResource = endpoint.newResource(data);
  await newResource.save();
  return Promise.resolve();
}

export const editData = async (data) => {
  await data.save().catch(err => {
    console.log(err);
  });
}

export const findItem = async ref => {
  const collection = await endpoint.browse(where(field('ref').equalTo(ref)));
  
  return Promise.resolve(await collection.find(ref));
}

export default setupClient;