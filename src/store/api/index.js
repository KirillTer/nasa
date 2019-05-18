import request from 'superagent'
  
export const loadItemsApi = async() => {
    const {body} = await request.get(
        'https://api.spacexdata.com/v3/launches/past'
    )
    return body
}