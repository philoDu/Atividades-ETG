<template>
    <div class="perfil">
        <img :src="imagemUrl" alt="Foto do Perfil">
        <h2>{{  nome  }}</h2>
        <p>Idade: {{  idade  }}</p>
        <button @click="aumentarIdade">Fazer Aniversário</button>
    </div>
</template>

<script>
export default {
    name: 'PerfilUsuario',
    data() {
        return {
            nome: 'Maria Silva',
            idade: 29,
            imagemUrl: 'https://i.pravatar.cc/150?img=22'
        }
    },
    methods: {
        aumentarIdade(){
            this.idade++;
        }
    }
}
</script>

<style scoped>
.perfil {
    border: 1px solid #ccc; border-radius: 8px; 
    padding: 20px; 
    text-align: center; 
    width: 200px; 
    margin: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
img {
    width: 100px; 
    height: 100px; 
    border-radius: 50%;
}
</style>