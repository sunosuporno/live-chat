<template>
  <nav v-if='user'>
    <div>
      <p>Hey there {{user.user._rawValue.displayName}}</p>
      <p class="email">You are logged in as {{user.user._rawValue.email}}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout.js";
import getUser from "../composables/getUser.js"; 

export default {
    setup (){
        const {logout, error} = useLogout();
        const user = getUser();
        console.log(user)
        const handleClick = async () => {
            await logout();
            if(!error.value){
                console.log("logged out");
            }
        }

        return {handleClick, user}
    }
};
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>
