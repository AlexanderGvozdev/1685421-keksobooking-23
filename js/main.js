import './user-form.js';
import {getBlockForms} from './form-disabled.js';
import {initMap} from './map.js';

getBlockForms();

initMap();

/*чутка поправил, про окончания обсуждали же, что не по ТЗ,
понимаю конечно что в будущем пригодиться - но пока так,
с обработчиками тоже какой смысл? форма деактивирована по умолчанию и активируется при загрузке карты,
ну если по логике, то пользователь же не сможет пользоваться нерабочей формой
 */
