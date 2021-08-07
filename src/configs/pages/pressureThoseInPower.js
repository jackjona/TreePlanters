import React from "react";

const BoldText = ({ children }) => (
  <b style={{ fontWeight: "bold" }}>{children}</b>
);

const homePageConfig = {
  ctaTitle: "Spread the word!",

  ctaCopy: (
    <>
      <BoldText>Don't assume</BoldText> everyone knows about the choices they
      can make today to help prevent climate breakdown.{" "}
      <BoldText>We need everyone to become aware of what they can do</BoldText>.
      That way they can make informed decisions.
    </>
  ),
  emailSubject: "Join me in helping prevent climate change!",
  emailBody:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣 https://treeplanters.jackjona.live/",
  linkedinTitle: "TreePlanters",
  linkedinDescription:
    "Learn how you can help prevent earth’s climate breaking down.",
  facebookHashtag: "#climatechange",
  twitterTitle: "Learn how you can help prevent earth’s climate breaking down",
  twitterAccount: "TreePlanters",
  twitterHashtags: ["climatechange", "climatebreakdown"],
  socialTitle: "Want to help? Great!",
  socialCopy:
    "Send this page to your friends, family and followers via our handy pre-written message.",
  url: "https://treeplanters.jackjona.live/",
  whatsappTitle:
    "Hey! The choices we make today can help prevent earth’s climate breaking down 🌎🔥 Check out this site to learn how you can make simple changes to reduce your carbon footprint 👣"
};

export default homePageConfig;
