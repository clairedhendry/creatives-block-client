import TokenService from "../Services/token-service";
import config from "../config";

const BlockAPIService = {
  getAllRecentBlocks() {
    return fetch(`${config.API_ENDPOINT}/blocks/recent-blocks`, {
      headers: {
        // 'API_TOKEN': `bearer ${config.API_TOKEN}`,
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
        alert(`something went wrong: ${err.message}`);
      });
  },

  getBlock(category, blockId) {
    return fetch(`${config.API_ENDPOINT}/blocks/${category}/${blockId}`, {
      headers: {
        // 'API_TOKEN': `bearer ${config.API_TOKEN}`,
        Authorization: `bearer ${TokenService.getAuthToken()}`,
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
        alert(`something went wrong: ${err.message}`);
      });
  },

  getUsersBlocks(user_name) {
    return fetch(`${config.API_ENDPOINT}/recent-blocks/${user_name}`, {
      headers: {
        // 'API_TOKEN': `bearer ${config.API_TOKEN}`,
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
        alert(`something went wrong: ${err.message}`);
      });
  },

  getBlockFeedback(blockId) {
    return fetch(`${config.API_ENDPOINT}/feedback/${blockId}`, {
      headers: {
        // 'API_TOKEN': `Bearer ${config.API_TOKEN}`,
        Authorization: `bearer ${TokenService.getAuthToken()}`,
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
        alert(`something went wrong: ${err.message}`);
      });
  },

  postFeedback(block_id, feedback, user_name, flagged) {
    return fetch(`${config.API_ENDPOINT}/feedback/${block_id}`, {
      method: "POST",
      headers: {
        // 'API_TOKEN': `bearer ${config.API_TOKEN}`,
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        block_id: block_id,
        feedback: feedback,
        user_name: user_name,
        flagged: flagged,
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
        alert(`something went wrong: ${err.message}`);
      });
  },

  postNewBlock(
    user_name,
    category_id,
    block_title,
    block_file,
    block_description,
    feedback_details
  ) {
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("category_id", category_id);
    formData.append("block_title", block_title);
    formData.append("block_file", block_file, block_file.name);
    formData.append("block_description", block_description);
    formData.append("feedback_details", feedback_details);

    return fetch(`${config.API_ENDPOINT}/blocks/upload`, {
      method: "POST",
      headers: {
        // 'API_TOKEN': `bearer ${config.API_TOKEN}`,
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })

      .catch((err) => {
        alert(`something went wrong: ${err.message}`);
      });
  },
};

export default BlockAPIService;
