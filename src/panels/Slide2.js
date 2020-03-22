import React from "react";
import styled from "styled-components";
import $ from "jquery";

const Section = styled.section`
  height: 100%;
`;

const Slide2 = () => {
  $("#subscriptionform").submit(function(e) {
    e.preventDefault();
    formSubmit();
  });

  function formSubmit() {
    var emailSubmitName = $("#email_submit").val();
    if (emailSubmitName != "") {
      var $form = $("#subscriptionform"),
        url =
          "https://script.google.com/macros/s/AKfycbzsNNNuqDMDzGKJ1YBZ8GZpfvKDn8OVA6ulBBk2FZCkyQPUS7M/exec";
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize(),
        success: function(response) {
          $("#subscriptionform")[0].reset();
          alert("Ваша форма была отправлена");
          return true;
        }
      });
    } else {
      return false;
    }
  }
  console.log(formSubmit)
  return (
    <Section>
      <form id="subscriptionform">
        <label>Электронная почта</label>
        <input
          type="email"
          name="email_submit"
          id="email_submit"
          required="required"
        ></input>
        <input type="submit" value="SUBMIT" id="submit"></input>
      </form>
    </Section>
  );
};

export default Slide2;
