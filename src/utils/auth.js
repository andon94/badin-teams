import {DateTime} from 'luxon'
import * as Roles from '../services/authorization/permissions'
import {Ability} from "@casl/ability";

export function isAuthenticated(data) {
    if(!data) return false;

    const tokenExist = Boolean(data.token);
    const isTokenExpired = DateTime.now() >= DateTime.fromFormat(data.expiration, "YYYY/MM/DD HH:mm:ss");

    return tokenExist && !isTokenExpired;
}


export function setUserRoles(roles = []) {
    const allPermissions = roles.reduce((acc,curr) => {
        return acc.concat(Roles[curr])
    },[]);

    return new Ability(allPermissions);
}


export function setRolesIfUserIsAuthenticated(storage) {
    if(!storage) return null;

    if(isAuthenticated(storage)) {
        return setUserRoles(storage.roles);
    }

    return null;
}
