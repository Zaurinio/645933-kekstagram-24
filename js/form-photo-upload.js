const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const editableImageSection = document.querySelector('.img-upload__preview');
const editableImage = editableImageSection.querySelector('img');

const onFileChooserClick = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    editableImage.src = URL.createObjectURL(file);
  }
};

const bindFileChooserListener = () => fileChooser.addEventListener('change', onFileChooserClick);

export {bindFileChooserListener};
