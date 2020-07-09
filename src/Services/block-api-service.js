import TokenService from '../Services/token-service'
import config from '../config'

const BlockAPIService = {
getAllRecentBlocks() {
return fetch(`${config.API_ENDPOINT}/recent-blocks`, {
    headers: {
        'authorization': `basic ${config.AUTHORIZATION}`,
    },
})
    .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
},

getBlock(category, blockId) {
    return(`${config.API_ENDPOINT}/blocks/${category}/${blockId}`, {
        headers: {
            'authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
    .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
    
},

getBlockFeedback(user_id, blockId) {
    return(`${config.API_ENDPOINT}/blocks/${user_id}/${blockId}/feedback`, {
        headers: {
            'authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
    .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
        )
},

postFeedback(user_id, blockId, text) {
    return fetch(`${config.API_ENDPOINT}/blocks/${user_id}/${blockId}/feedback`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            user_id: user_id,
            blockId: blockId,
            text,
        }),
    })
    .then(res => 
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json())
}

};

export default BlockAPIService;