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

export const CHANGE_MEDIUM_SYNOPSIS = 'CHANGE_MEDIUM_SYNOPSIS';
export function changeMediumSynopsis(mediumSynopsis) {
  return {
    type: CHANGE_MEDIUM_SYNOPSIS,
    mediumSynopsis
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
export function addData(title, mediumSynopsis, contentType) {
  return {
    type: ADD_DATA,
    title,
    mediumSynopsis,
    contentType
  }
}

export const EDIT_DATA = 'EDIT_DATA';
export function editData(title, mediumSynopsis, contentType) {
  return {
    type: EDIT_DATA,
    title,
    mediumSynopsis,
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

export const SET_ERROR = 'SET_ERROR';
export function setError(error) {
  return {
    type: SET_ERROR,
    error
  }
}

export const SET_OFFLINE = 'SET_OFFLINE';
export function setOffline(data) {
  return {
    type: SET_OFFLINE,
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

export const SET_DELETE_MODAL = 'SET_DELETE_MODAL';
export function setDeleteModal(deleteModal, deleteIndex) {
  return {
    type: SET_DELETE_MODAL,
    deleteModal,
    deleteIndex
  }
}

export const SET_EDIT_MODAL = 'SET_EDIT_MODAL';
export function setEditModal(editModal) {
  return {
    type: SET_EDIT_MODAL,
    editModal
  }
}

export const SET_DELETE_INDEX = 'SET_DELETE_INDEX';
export function setDeleteIndex(deleteIndex) {
  return {
    type: SET_DELETE_INDEX,
    deleteIndex
  }
}

export const SET_EDIT_INDEX = 'SET_EDIT_INDEX';
export function setEditIndex(editIndex) {
  return {
    type: SET_EDIT_INDEX,
    editIndex
  }
}