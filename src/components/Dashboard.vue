<template>
    <div class="ws_container">
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/mobile.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Telemóveis e Smartwatches
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/monitor.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Informática
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/freezer.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Eletrodomésticos </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/house.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Casa
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/tv.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Pacotes TV
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/sun.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Poupança Energética
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/freezer_large.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Cozinhas por Medida
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/ticket.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Bilheteria
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/camera.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Fotografia e Impressão
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/secure.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Seguros
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/plus.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Mais serviços
            </div>
        </div>
        <div class="ws_card">
            <div class="ws_circle">
                <div class="ws_icon"><img src="../../public/images/search.svg" alt=""></div>

            </div>
            <div class="ws_icon-title">
                Todos os serviços
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            name: 'John',
        };
    },
    methods: {
        doIt() {
            console.log(`Hello ${this.name}`);
        },
    },
    mounted() {
        this.doIt();
    },
};
</script>

<style scoped>
.ws_container {
    display: flex;
    /* max-width: 1200px; */
    justify-content: space-evenly;
    flex-wrap: wrap;
    justify-items: center;
    background-color: #F6F6F6;
    border-radius: 2px;
    padding: 10px;

}


.ws_card {

    display: flex;
    flex-direction: column;
    gap: 10px 50px;
    align-content: center;
    align-items: center;
    width: calc(100% / 6);
    /* width: 143px;
    height: 198px; */

}


.ws_circle {

    display: flex;
    flex-direction: column;
    width: 140px;
    height: 140px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-color: #FFF;
    border-radius: 50%;


}

.ws_icon {

    display: flex;

    height: 70px;
    justify-content: center;
    justify-items: center;
    border-radius: 2%;
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;

}


.ws_icon-title {

    display: flex;
    justify-content: center;
    justify-items: center;
    text-align: center;
    width: 143px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;

}


@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>