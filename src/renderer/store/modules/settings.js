import settings from 'electron-settings'
import _ from 'lodash'

const keys = settings.get('keys');

const state = {
    jump: _.has(keys, 'jump') ? keys.jump : { id: 1, textPhrase: "Jump", key: " ", name: "SPACE-BAR" } ,
    crouch: _.has(keys, 'crouch') ? keys.crouch : { id: 2, textPhrase: "Crouch", key: "c", name: "C" } ,
    modifier: _.has(keys, 'modifier') ? keys.modifier : { id: 3, textPhrase: "Modifier", key: "ALT", name: "ALT" } ,
    trigger: _.has(keys, 'trigger') ? keys.trigger : { id: 4, textPhrase: "Trigger", key: " ", name: "SPACE-BAR" } ,
}

const mutations = {

}

const actions = {
    someAsyncTask ({ commit }) {
    }
}

export default {
    state,
    mutations,
    actions
}
