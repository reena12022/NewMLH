import I18n, {getLanguages} from "react-native-i18n";
import en from './en.json'
import fr from './fr.json'
I18n.fallbacks = true;

I18n.translations = {
  fr :fr,
  en:en
};

getLanguages()
.then((languages)=>{
  //console.log('getLanguages',languages)
})
.catch((error)=>{
  //console.log("getLanguages error",error)
})

export default I18n;