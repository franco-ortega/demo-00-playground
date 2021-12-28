const originalPath = 'https://allocations-encrypted.s3.us-east-2.amazonaws.com/investments/61424d66e20ccb001819bf9e/1631735142858-SPV_Agreement_-_Metadata_%28Hypergrowth_VI%29.pdf';

const brokenPath = 'https://d1ubj1eq9rk19l.cloudfront.net/investments/61424d66e20ccb001819bf9e/1634593290505-SPV_Agreement_-_Metadata_(Hypergrowth_VI).pdf';

const resignedPath = 'https://allocations-encrypted.s3.us-east-2.amazonaws.com/investments/61424d66e20ccb001819bf9e/1634593290505-SPV_Agreement_-_Metadata_Hypergrowth_VI.pdf';

const testPath = 'https://allocations-encrypted.s3.us-east-2.amazonaws.com/investments/61424d66e20ccb001819bf9e/1631735142858-SPV_A g r   e e m e n t_-_Metadata_%28Hypergrowth_VI%29.pdf'

// console.log(testPath);

//this regex replaces an empty space with an underscore _
// console.log('/////////TEST PATH/////');
// console.log(testPath.replace(
//   /\s/g,
//   "_"
// ));
// console.log('/////////ORIGINAL PATH/////');
// console.log(originalPath.replace(
//   /\s/g,
//   "_"
// ));
// console.log('/////////BROKEN PATH/////');
// console.log(brokenPath.replace(
//   /\s/g,
//   "_"
// ));
// console.log('/////////RESIGNED PATH/////');
// console.log(resignedPath.replace(
//   /\s/g,
//   "_"
// ));


// const addTwoNumbers = (a, b) => a + b;

// console.log(addTwoNumbers(2, 5));
// console.log(addTwoNumbers(2, 5, 10));



// console.log('/////////PROVIDER MAP/////');
// PROVIDER MAP
const providerMap = {
  "New Directions": {
    template_name: "Allocations_New_Directions_Wire_Instructions",
    template_id: "tpl_3q73TzjRrYGDYzK6De",
  },
};

const providerName = "New Directions";
const templateData = providerMap[providerName];

// console.log(templateData);
// console.log(templateData.template_name);



// console.log('/////////adjTemplateName/////');
// adjTemplateName

const adjTemplateName = 'investments/5e0fc7222dafaa0023c6e26f/' + '2020 K1s_Sharding Holdings V_Benjamin Clarke'
    .replace(/[^a-zA-Z0-9 _-]/g, "") // removes unwanted special characters
    .replace(/\s\s+/g, "")
    .replace(/ /g, "_") // removes extra spaces
    + '.pdf'

    // console.log(adjTemplateName);

const adjTemplateNameOriginalPath =
  'https://allocations-encrypted.s3.us-east-2.amazonaws.com/investments/61424d66e20ccb001819bf9e/'
  + '1631735142858-SPV_Agreement_-_Metadata_%28Hypergrowth_VI%29'
    .replace(/[^a-zA-Z0-9 _-]/g, "") // removes unwanted special characters
    .replace(/\s\s+/g, "")
    .replace(/ /g, "_") // removes extra spaces
  + '.pdf';

    // console.log(originalPath);
    // console.log(adjTemplateNameOriginalPath);

const adjTemplateNameBrokenPath =
  'https://d1ubj1eq9rk19l.cloudfront.net/investments/61424d66e20ccb001819bf9e/'
  + '1634593290505-SPV_Agreement_-_Metadata_(Hypergrowth_VI)'
    .replace(/[^a-zA-Z0-9 _-]/g, "") // removes unwanted special characters
    .replace(/\s\s+/g, "")
    .replace(/ /g, "_") // removes extra spaces
  + '.pdf';

    console.log(brokenPath);
    console.log(adjTemplateNameBrokenPath);