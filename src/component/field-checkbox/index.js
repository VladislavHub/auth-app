class FieldCheckbox {
  static toggle = (targer) => {
    targer.toggleAttribute('active')
  }
}

window.fieldCheckbox = FieldCheckbox
