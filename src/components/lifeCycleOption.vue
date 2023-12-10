<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'life cycle hooks',
    };
  },
  methods: {
    doIt() {
      console.log(`Hello ${this.desc}`);
    },
  },
  beforeCreate() {
        console.log(`beforeCreate: Component is being initialized.
        Neste estágio, o componente está sendo inicializado, mas ainda não possui acesso aos dados ou eventos.`
        
        );
      },
      created() {
        console.log(`created: Component has been created.
        Após este gancho, o componente foi criado, e agora você tem acesso aos dados e métodos. É um bom lugar para configurar coisas iniciais, como buscar dados.
`        );
      },
      beforeMount() {
        console.log(`beforeMount: Component is about to be rendered in the DOM.
        Antes do componente ser renderizado no DOM (Document Object Model). É um momento útil para fazer ajustes finais antes da renderização.`);
      },
      mounted() {
        console.log(`mounted: Component has been rendered in the DOM.
        Após o componente ter sido renderizado no DOM. Aqui, você pode interagir com o DOM e realizar operações de pós-renderização, como acessar elementos HTML ou adicionar ouvintes de eventos.
        `);
      },
      beforeUpdate() {
        console.log(`beforeUpdate: Component is about to be updated.
        Antes de uma atualização ocorrer, este gancho é acionado. É um momento onde você pode verificar os dados antes que o componente seja atualizado.
        `);
      },
      updated() {
        console.log(`updated: Component has been updated.
        Após uma atualização do componente e do DOM. Aqui, você pode reagir a mudanças nos dados ou no DOM após a atualização.
        `);
      },
      beforeDestroy() {
        console.log(`beforeDestroy: Component is about to be destroyed.
        Antes de um componente ser destruído. Este é o momento de limpar recursos ou cancelar assinaturas de eventos.
        `);
      },
      destroyed() {
        console.log(`destroyed: Component has been destroyed.
        Após um componente ter sido destruído e removido do DOM. Neste estágio, você pode executar ações finais de limpeza.
        `);
      }
};
</script>

<style scoped>
</style>