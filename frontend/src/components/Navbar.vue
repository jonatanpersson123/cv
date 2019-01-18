<template>
    <nav>
        <ul>
            <li class="nav-item active">01</li>
            <li class="nav-item">02</li>
            <li class="nav-item">03</li>
            <li class="nav-item">04</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
nav {
    position: absolute;
    right: 48px;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

ul {
    margin: 0;
    list-style: none;
}

li {
    margin-top: 16px;
    padding-left: 16px;
    text-align: center;
}

li.active {
    border-left: 4px solid var(--dark, black);
    color: var(--dark, black);
    font-size: 30px;
}

li:not(:first-child) {
    margin-top: 24px;
    padding-left: 16px;
}

.nav-item {
    font-family: Avenir-Heavy;
    font-size: 20px;
    color: lightslategray;
}
</style>
