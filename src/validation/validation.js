import i18n from '../i18n/i18n'
import { extend, configure } from 'vee-validate';
import { required } from "vee-validate/dist/rules"

configure({
  defaultMessage: (field, values) => {
    const formatting = {
      field: values._field_,
      length: values.length,
    }
    return i18n.t(`validation.${values._rule_}`, formatting)
  }
})

extend('email', value => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  const check = regex.test(value)
  if (check) return true
  else return false
})

extend('number', value => {
  return !isNaN(value)
})

extend('required', required);

