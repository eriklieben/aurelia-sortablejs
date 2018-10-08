import { addAppender, clearAppenders } from 'aurelia-logging';
import { setLevel, logLevel  } from 'aurelia-logging';

class CustomLogAppender {

  private colorList = {
    'aurelia': 'background-color: #E91E63; color: #fff',
    'lists': 'background-color: #03A9F4; color: #fff',
    'multiple': 'background-color:#8BC34A; color: #fff',
  }

  public getColorScheme(id) {
    return (this.colorList.hasOwnProperty(id)) ? this.colorList[id] : 'color: #000, background-color: #fff';
  }
  
  debug(logger, message, ...rest){
    console.debug(
      `%cDEBUG %c ${logger.id} `, 'color: #fff; background-color: green', this.getColorScheme(logger.id),
      `${message}`, ...rest);
  }
  info(logger, message, ...rest){
    console.info(`%c INFO %c ${logger.id} `, 'color: #fff; background-color: blue', this.getColorScheme(logger.id),
    `${message}`, ...rest);
  }
  warn(logger, message, ...rest){
    console.warn(`%c WARN %c ${logger.id} `, 'color: #000; background-color: yellow', this.getColorScheme(logger.id),
    `${message}`, ...rest);    
  }
  error(logger, message, ...rest){
    console.error(`%c ERROR %c ${logger.id} `, 'color: #fff; background-color: red', this.getColorScheme(logger.id),
    `${message}`, ...rest);    
  }
}

export default function setupLogging() {
  clearAppenders();
  setLevel(logLevel.debug);  
  addAppender(new CustomLogAppender());
}

