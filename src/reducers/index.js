import {
  SET_MODAL,
  CHANGE_TITLE,
  CHANGE_MEDIUM_DESCRIPTION,
  CHANGE_TYPE,
  ADD_DATA,
  SET_SESSION,
  SET_TENANT,
  SET_ENDPOINT,
  SET_FILTER,
  SET_PAGE
} from '../actions';

const reducers = (state = {
  modalVisible: false,
  title: '',
  mediumDescription: '',
  contentType: '',
  session: {},
  tenant: {},
  endpoint: {},
  filter: '',
  page: 1
}, action) => {
  let result = { ...state };

  switch (action.type) {
    case SET_MODAL:
      result.modalVisible = action.showModal;
      return result;
    case CHANGE_TITLE:
      result.title = action.title;
      return result;
    case CHANGE_MEDIUM_DESCRIPTION:
      result.mediumDescription = action.mediumDescription;
      return result;
    case CHANGE_TYPE:
      result.contentType = action.contentType;
      return result;
    case ADD_DATA:
      return result;
    case SET_SESSION:
      result.session = action.session;
      return result;
    case SET_TENANT:
      result.tenant = action.tenant;
      return result;
    case SET_ENDPOINT:
      result.endpoint = action.endpoint;
      return result;
    case SET_FILTER:
      result.filter = action.filter;
      return result;
    case SET_PAGE:
      result.page = action.page >= 1 ? action.page : 1;
      return result;
    default:
      return result;
  }
}

export default reducers;