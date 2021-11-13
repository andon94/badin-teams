import { Ability, AbilityBuilder } from "@casl/ability";

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
    'EditEmployee',
    'Home',
    'Teams',
    'Clients',
    'Projects',
    'Employees',
    'TeamProfile',
    'ClientProfile',
    'ProjectProfile',
    'EmployeeProfile',
    'Login',
    'ForgetPass'
]

export const CAN_SEE_PAGE_ABILITY = 'see'

function setPermissionForPage(can) {
    return function loopAndSet(pages) {
        pages.forEach((page) => {
            can(CAN_SEE_PAGE_ABILITY, page);
        });
    }
}

const getAdminUserPermissions = () => {
    const {can, rules } = new AbilityBuilder(Ability);
    const setPermissions = setPermissionForPage(can);

    setPermissions(ADMIN_ALLOWED_PAGES)
    return rules;
}

export const ROLE_ADMIN = getAdminUserPermissions()

