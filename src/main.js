import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
    uri: 'https://salty-oasis-09934.herokuapp.com/',
})

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("token") || ""
        }
    }
})

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

const apolloProvider = new createApolloProvider({
    defaultClient: apolloClient
})

async function isAuth(){
    if(localStorage.getItem("token") === null){
        return false;
    }
    /*
    try{
        await apolloClient.mutate({
            mutation: gql`
            mutation($refresh: String!){
                        refreshToken(refresh: $refresh){
                            access
                        }
            } 
            `,variables: {
                refresh: localStorage.getItem("token_refresh")
            }
        })
        localStorage.setItem("token_access", result.data.refreshToken.access)
        return true;
    }catch(error){
        localStorage.clear()
        alert("token se ha vencido, inicie sesión otra vez")
        return false;
    }
    */
   return true;
    
}

router.beforeEach(async (to, from)=>{
    var is_auth = await isAuth()
    if(!is_auth && to.meta.requiresAuth){
        return {name: "logIn"};
    }else if(is_auth && to.meta.reverseAuth){
        return {name: "profile"}
    }else{
        return true;
    }
})

createApp(App).use(router).use(apolloProvider).mount('#app')

