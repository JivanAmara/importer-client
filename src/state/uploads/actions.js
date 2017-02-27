import {GET_UPLOAD_ID, SET_UPLOAD_ID, GET_UPLOAD_STATUS, SET_UPLOAD_STATUS, GET_UPLOAD_COUNT, SET_UPLOAD_COUNT, UPLOAD_FILE_SUCCESS, CONFIGURE_SUCCESS, UPLOADED_DATA_SUCCESS} from '../actiontypes'

import {uploadFiles, configure} from '../../services/geonode';

export function getUploadId() {
  return {
    type: GET_UPLOAD_ID
  }
}
export function uploadFileSuccess(result) {
  return {
    type: UPLOAD_FILE_SUCCESS,
    result
  }
}
export function uploadedDataSuccess(result) {
  return {
    type: UPLOADED_DATA_SUCCESS,
    result
  }
}
export function configureSuccess(result) {
  return {
    type: CONFIGURE_SUCCESS,
    result
  }
}
export function upload(files) {
  return (dispatch, getState) => {
    const state = getState();
    let server = state.server.url; //need to be tested
    return uploadFiles(server, [])
    .then((json) => dispatch(uploadFileSuccess(json)))
    //.then(() => dispatch(configure));
  }
}
export function getUploadedData() {
  return (dispatch, getState) => {
    const state = getState();
    let server = state.server.url;
    return uploadedData(server, id)
    .then((json) => dispatch(uploadedDataSuccess(json)))
  }
}
export function configureUploads() {
  return (dispatch, getState) => {
    const state = getState();
    let server = state.server.url; //need to be tested
    let id = state.uploads.id;
    return configure(server, id, {})
    .then((json) => dispatch(configureSuccess(json)));
  }
}
