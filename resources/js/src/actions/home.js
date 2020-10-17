export const inputPostText = text => ({
    type: 'INPUT_POST_TEXT',
    payload: {
        text,
    }
})

export const clearTextBox = () => ({
    type: 'CLEAR_TEXT',
    payload: { text:'' },
});
  

export const imageChoce = (imageUrl) => ({
    type: 'IMAGE_CHOICE',
    payload: { imageUrl },
});
  

export const imageClear = (imageUrl) => ({
    type: 'IMAGE_CLEAR',
    payload: { imageUrl },
});
  

  