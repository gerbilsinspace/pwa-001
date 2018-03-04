import Client, { where, field } from 'sequoia-client-sdk';
import {
  setTenant,
  setSession,
  setEndpoint,
  setData
} from './actions';

let client;

async function setupClient(dispatch) {
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
    return;
  }

  dispatch(setTenant(tenant));

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

  dispatch(setSession(session));

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

  const endpoint = await metadataService.resourcefulEndpoint('contents').catch(err => {
    error = err;
  });

  if (!endpoint) {
    error = 'no endpoint';
  }

  if (error) {
    console.log(error);
    return;
  }

  dispatch(setEndpoint(endpoint));

  const collection = await endpoint.browse(where(field('title').startsWith('')).fields(
    'title',
    'mediumSynopsis',
    'duration',
    'ref',
    'type',
    'owner',
  ).include('assets').page(1)
    .perPage(100)
    .orderByUpdatedAt()
    .desc()
    .count()).catch(err => {
      error = err
    });

  if (!collection) {
    error = 'no collection';
  }
  
  if (error) {
    console.log(error);
    return;
  }

  setData(collection);
}

export default setupClient;