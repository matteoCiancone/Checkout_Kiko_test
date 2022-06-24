<template>
  <div class="form-container">

    <form class="checkout-form form-default" method="post">
      <input type="text" required placeholder="Nome*" name="nome">
      <input type="text" required placeholder="Cognome*" name="cognome">
      <input type="email" required placeholder="Email*" name="email">
      <input type="phone" required placeholder="Telefono cellulare*" name="telefono cellulare">
      <input type="text" required placeholder="Indirizzo e numero civico*" name="indirizzo e numero civico">
      <input type="number" required placeholder="CAP*" name="cap">
      <input type="text" required placeholder="Città*" name="citta">
      <select name="provincia*" required>
        <option value="" disabled selected hidden>Provincia*</option>
        <option value="L'Aquila">L'Aquila</option>
        <option value="Milano">Milano</option>
        <option value="Bologna">Bologna</option>
      </select>
      <input type="text" maxlength="30" placeholder="Informazioni aggiuntive" name="informazioni aggiuntive"
        id="more-info-input">
      <p>Max 30: caratteri c/o, interno, nome sul citofono</p>

      <div class="checkbox">
        <div class="checkbox-indirizzo">
          <input type="checkbox" name="salva indirizzo" id="salva-indirizzo-box">
          <label for="salva-indirizzo-box">Salva questo indirizzo nella rubrica</label>
        </div>
        <div class="checkbox-fatturazione">
          <input type="checkbox" name="dati fatturazione" id="dati-fatturazione-box">
          <label for="dati-fatturazione-box">I miei dati di fatturazione coincidono con i dati per la consegna</label>
        </div>
      </div>

      <button class="showShipmentBtn" type="button">Mostra metodi di spedizioni</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "Checkout-form",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../src/scss/component/form.scss"
</style>
