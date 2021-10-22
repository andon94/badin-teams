import { AbilityBuilder } from '@casl/ability'
import { MANAGE, ADMIN, OPERATIONAL_ADMIN, UNAUTHORIZED, UNAUTHORIZED_USER } from './constants'

export default function defineRulesFor (role) {
  const { can, cannot, rules } = new AbilityBuilder()

  if (role === OPERATIONAL_ADMIN) {
    for (const property in ADMIN) {
      can(MANAGE, ADMIN[property])
    }

    for (const property in UNAUTHORIZED) {
      can(MANAGE, ADMIN[property])
    }
  } else if (role === UNAUTHORIZED_USER) {
    for (const property in UNAUTHORIZED) {
      can(MANAGE, ADMIN[property])
    }

    for (const property in ADMIN) {
      cannot(MANAGE, ADMIN[property])
    }
  }

  return rules
}
