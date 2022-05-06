import state from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const counterStore = {
    // Nos permite que diferentes getters se llamen de distinta manera
    namespaced: true,

    // Tenemos que crear una arrowfunction que devuelva
    // un objeto que es el estado
    state,

    // Las mutations son sincronas y cambian el estado directamente
    mutations,

    // Las actions son siempre asincronas. Por ejemplo, lanzamos una peticion a un backend
    // y cuando tenemos la respuesta lanzamos un commit de una mutation
    actions,

    // los getters se pueden llamar desde cualquier parte de la app
    getters,
};

export default counterStore;
