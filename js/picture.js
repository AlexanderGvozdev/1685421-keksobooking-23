const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_IMG = 'img/muffin-grey.svg';

const userPic = document.querySelector('.ad-form-header__input');
const userPicWrapper = document.querySelector('.ad-form-header__preview');
const picture = document.querySelector('.ad-form__input');
const pictureWrapper = document.querySelector('.ad-form__photo');
const imgSize = {
  avatar: {
    width: 40,
    height: 44,
  },
  photo: {
    width: 70,
    height: 70,
  },
};

const createImgElement = (wrapper) => {
  const img = document.createElement('img');
  img.src = '';
  img.width = imgSize.avatar.width;
  img.height = imgSize.avatar.height;
  if (wrapper === pictureWrapper) {
    img.width = imgSize.photo.width;
    img.height = imgSize.photo.height;
  }
  img.alt = 'Фотография жилья';
  if (wrapper === userPicWrapper) {
    img.alt = 'Аватар пользователя';
  }

  return wrapper.appendChild(img);
};

const removeImgElement = (wrapper) => {
  if (wrapper.children.length !== 0) {
    wrapper.innerHTML = '';
  }
};

const uploadImage = (input, wrapper) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();
    const match = FILE_TYPES.some((extension) => fileName.endsWith(extension));

    if (match) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        removeImgElement(wrapper);
        createImgElement(wrapper);
        wrapper.firstChild.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

uploadImage(userPic, userPicWrapper);
uploadImage(picture, pictureWrapper);

const resetImage = () => {
  userPicWrapper.firstChild.src = DEFAULT_IMG;
  pictureWrapper.innerHTML = '';
};

export {resetImage};
