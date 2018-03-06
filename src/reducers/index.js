import {
  SET_MODAL,
  CHANGE_TITLE,
  CHANGE_MEDIUM_SYNOPSIS,
  CHANGE_TYPE,
  ADD_DATA,
  SET_SESSION,
  SET_TENANT,
  SET_ENDPOINT,
  SET_FILTER,
  SET_PAGE,
  SET_DATA,
  SET_DELETE_MODAL,
  SET_EDIT_MODAL,
  SET_DELETE_INDEX,
  EDIT_DATA,
  SET_EDIT_INDEX
} from '../actions';

const reducers = (state = {
  modalVisible: false,
  title: '',
  mediumSynopsis: '',
  contentType: '',
  session: {},
  tenant: {},
  endpoint: {},
  filter: '',
  page: 1,
  data: [],
  deleteModal: false,
  editModal: false,
  deleteIndex: -1,
  editIndex: -1
}, action) => {
  let result = { ...state };

  switch (action.type) {
    case SET_MODAL:
      result.modalVisible = action.showModal;
      return result;
    case CHANGE_TITLE:
      result.title = action.title;
      return result;
    case CHANGE_MEDIUM_SYNOPSIS:
      result.mediumSynopsis = action.mediumSynopsis;
      return result;
    case CHANGE_TYPE:
      result.contentType = action.contentType;
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
    case SET_DATA:
      result.data = [ ...action.data ];
      return result;
    case ADD_DATA:
      result.data = [...state.data, {
        title: action.title,
        mediumSynopsis: action.mediumSynopsis,
        contentType: action.contentType
      }]
      return result;
    case SET_DELETE_MODAL:
      result.deleteModal = action.deleteModal;
      return result;
    case SET_EDIT_MODAL:
      result.editModal = action.editModal;
      return result;
    case SET_DELETE_INDEX:
      result.deleteIndex = action.deleteIndex;
      return result;
    case SET_EDIT_INDEX:
      result.editIndex = action.editIndex;
      return result;
    case EDIT_DATA:
      return result;  
    default:
      return result;
  }
}

export default reducers;