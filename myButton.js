export class Button {
  constructor(btnText, btnBgColor, btnTitle) {
    this.btnText = btnText;
    this.btnBgColor = btnBgColor;
    this.btnTitle = btnTitle;
  }

  show() {
    document.write(
      `<button style="background-color:${this.btnBgColor}; padding:10px; margin:5px;" title="${this.btnTitle}">${this.btnText}</button>`
    );
  }
}
