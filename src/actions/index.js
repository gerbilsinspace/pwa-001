export const SET_MODAL = 'SET_MODAL';
export function setModal(showModal) {
  return {
    type: SET_MODAL,
    showModal
  };
};

export const CHANGE_TITLE = 'CHANGE_TITLE';
export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title
  }
}

export const CHANGE_MEDIUM_DESCRIPTION = 'CHANGE_MEDIUM_DESCRIPTION';
export function changeMediumDescription(mediumDescription) {
  return {
    type: CHANGE_MEDIUM_DESCRIPTION,
    mediumDescription
  }
}

export const CHANGE_TYPE = 'CHANGE_TYPE';
export function changeType(contentType) {
  return {
    type: CHANGE_TYPE,
    contentType
  }
}

export const ADD_DATA = 'ADD_DATA';
export function addData(title, mediumDescription, contentType) {
  return {
    type: ADD_DATA,
    title,
    mediumDescription,
    contentType
  }
}

export const SET_SESSION = 'SET_SESSION';
export function setSession(session) {
  return {
    type: SET_SESSION,
    session
  }
}

export const SET_TENANT = 'SET_TENANT';
export function setTenant(tenant) {
  return {
    type: SET_TENANT,
    tenant
  }
}

export const SET_ENDPOINT = 'SET_ENDPOINT';
export function setEndpoint(endpoint) {
  return {
    type: SET_ENDPOINT,
    endpoint
  }
}

export const SET_DATA = 'SET_DATA';
export function setData(data) {
  return {
    type: SET_DATA,
    data
  }
}

export const SET_FILTER = 'SET_FILTER';
export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  }
}

export const SET_PAGE = 'SET_PAGE';
export function setPage(page) {
  return {
    type: SET_PAGE,
    page
  }
}