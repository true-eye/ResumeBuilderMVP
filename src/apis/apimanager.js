import axios from 'axios'
import _ from 'lodash'

const apiUrl = process.env.API_URL

const handleErrors = err => {
  const status = _.get(err, 'response.status')
  const message = _.get(err, 'response.data.message')
  if (status === 401) {
    if (!message) {
      window.location.href = '/401'
    }
  }
  throw err
}

const responseData = res => res

const requests = {
  get: (url, headers) =>
    axios({
      url: `${apiUrl}${url}`,
      method: 'get',
      headers: {
        ...headers,
        // Authorization: `Bearer ${getLoggedInToken()}`,
      },
    })
      .then(responseData)
      .catch(handleErrors),
  post: (url, headers, data) =>
    axios({
      url: `${apiUrl}${url}`,
      method: 'post',
      headers: {
        ...headers,
        // Authorization: `Bearer ${getLoggedInToken()}`,
      },
      data,
    })
      .then(responseData)
      .catch(handleErrors),
  put: (url, headers, data) =>
    axios
      .put(`${apiUrl}${url}`, data, {
        headers: {
          ...headers,
          // Authorization: `Bearer ${getLoggedInToken()}`,
        },
      })
      .then(responseData)
      .catch(handleErrors),
  patch: (url, data) =>
    axios
      .patch(`${apiUrl}${url}`, data)
      .then(responseData)
      .catch(handleErrors),
  del: url =>
    axios
      .delete(`${apiUrl}${url}`, {
        headers: {
          // Authorization: `Bearer ${getLoggedInToken()}`,
        },
      })
      .then(responseData)
      .catch(handleErrors),
}

export const ApiManager = {
  getExample: () => requests.get('example'),
}

export default ApiManager
