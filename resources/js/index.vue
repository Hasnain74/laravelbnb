<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link style="margin-left: 10px;" class="navbar-brand mr-auto" :to="{name: 'home'}">LaravelBNB</router-link>
            <router-link class="btn nav-btn" :to="{name: 'second'}">Second Component</router-link>
        </nav>
        
        <div class="mt-4 mb-4 pr-4 pl-4">
            <router-view>
                
            </router-view>
        </div>
        
    </div>
</template>