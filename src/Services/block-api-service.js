import TokenService from '../Services/token-service'
import config from '../config'

const BlockAPIService = {
getAllRecentBlocks() {
return fetch(`${config.API_ENDPOINT}/blocks/recent-blocks`, {
    headers: {
        'API_TOKEN': `bearer ${config.API_TOKEN}`,
    },
    })
    .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  })
 
  
  .catch((err) => {
    alert(`something went wrong: ${err.message}`)
  });
},

getBlock(category, blockId) {
    return fetch(`${config.API_ENDPOINT}/blocks/${category}/${blockId}`, {
        headers: {
            'API_TOKEN': `bearer ${config.API_TOKEN}`,
            'Authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
     
      
      .catch((err) => {
        alert(`something went wrong: ${err.message}`)
      });
    },

getUsersBlocks(user_name) {
    return fetch(`${config.API_ENDPOINT}/blocks/${user_name}`, {
        headers: {
            'API_TOKEN': `bearer ${config.API_TOKEN}`,
            'Authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
     
      
      .catch((err) => {
        alert(`something went wrong: ${err.message}`)
      });
   },


getBlockFeedback(blockId) {
    return fetch(`${config.API_ENDPOINT}/feedback/${blockId}`, {
        headers: {
            'API_TOKEN': `Bearer ${config.API_TOKEN}`,
            'authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((err) => {
        alert(`something went wrong: ${err.message}`)
      });
    },

postFeedback(block_id, feedback, userid, flagged) {
    return fetch(`${config.API_ENDPOINT}/feedback/${block_id}`, {
        method: 'POST',
        headers: {
            'API_TOKEN': `B=bearer ${config.API_TOKEN}`,
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            block_id: block_id,
            feedback: feedback,
            userid: userid,
            flagged: flagged
        }),
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
     
      
      .catch((err) => {
        alert(`something went wrong: ${err.message}`)
      });
    },

    postNewBlock(user_name, category_id, block_title, block_file, block_description, feedback_details) {
      return fetch(`${config.API_ENDPOINT}/blocks/${user_name}/${category_id}`, {
        method: 'POST',
        headers: {
            'API_TOKEN': `bearer ${config.API_TOKEN}`,
            'content-type': 'application/json',
            'authorization': `basic ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
            user_name: user_name,
            category_id: category_id,
            block_title: block_title,
            block_file: block_file,
            block_description: block_description,
            feedback_details: feedback_details
        }),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
     
      
      .catch((err) => {
        alert(`something went wrong: ${err.message}`)
      });
    }
}

export default BlockAPIService;