import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "3eg3wj80", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2022-11-04',
  useCdn: true,
});