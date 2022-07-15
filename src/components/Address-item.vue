<template>
    <div>
        <p>Nome: <span>{{ item.firstName }}</span></p>
        <p>Cognome: <span>{{ item.lastName }}</span></p>
        <p>Indirizzo: <span>{{ item.line1 }}</span></p>
        <p>Città: <span>{{ item.town }}</span></p>
        <p>CAP: <span>{{ item.postalCode }}</span></p>
        <p>Telefono: <span>{{ item.phone }}</span></p>
        <p>Nazione: <span>{{ item.country.name }}</span></p>
    </div>
</template>


<script>
export default {
    name: "AddressItem",
    props: ["item"]

}
</script>