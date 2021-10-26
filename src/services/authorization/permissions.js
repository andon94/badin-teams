import {Ability, AbilityBuilder} from "@casl/ability";

export const ADMIN_ALLOWED_PAGES = [
    'CreateTeam',
    'EditTeams',
    'EditTeam',
    'CreateClient',
    'EditClients',
    'EditClient',
    'CreateProject',
    'EditProjects',
    'EditProject',
    'AddEmployee',
    'EditEmployees',
    'EditEmployee'
]

export const UNAUTHORIZED_PAGES =  [
    'HOME',
    'Teams',
    'Clients',
    'Projects',
    'Employees',
    'TeamProfile',
    'ClientProfile',
    'ProjectProfile',
    'EmployeeProfile',
];

export const CAN_SEE_PAGE_ABILITY = 'see'


function setPermissionForPage(can) {
    return function loopAndSet(pages) {
        pages.forEach((page) => {
            can(CAN_SEE_PAGE_ABILITY, page);
        });
    }
}


const getUnauthroizedUserPermissions = () => {
    const {can, rules } = new AbilityBuilder(Ability);
    const setPermissions = setPermissionForPage(can);

    setPermissions(UNAUTHORIZED_PAGES)

    return rules;

};

const getAdminUserPermissions = () => {
    const {can, rules } = new AbilityBuilder(Ability);
    const setPermissions = setPermissionForPage(can);

    setPermissions(ADMIN_ALLOWED_PAGES)

    return rules;

};


const UNAUTHORIZED_USER_PERMISSIONS = getUnauthroizedUserPermissions();
const ADMIN_PERMISSIONS = getAdminUserPermissions().concat(UNAUTHORIZED_USER_PERMISSIONS);




export const UNAUTHORIZED = new Ability(UNAUTHORIZED_USER_PERMISSIONS)
export const ADMIN = new Ability(ADMIN_PERMISSIONS);

