const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/' 
}); 
const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
const app = express();
server.listen(port,() => {
  console.log(`Server running at port `+port);
  });

//handles html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



//post to handle upload
app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

//app.listen(3000);

//post to handle upload
// router.post('/', uploadStrategy, async (req, res) => {

//   const aborter = Aborter.timeout(30 * ONE_MINUTE);
//   const blobName = getBlobName(req.file.originalname);
//   const stream = getStream(req.file.buffer);
//   const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
//   const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, blobName);

//   try {
    
//     await uploadStreamToBlockBlob(aborter, stream,
//       blockBlobURL, uploadOptions.bufferSize, uploadOptions.maxBuffers);

//     res.render('success', { message: 'File uploaded to Azure Blob storage.' });   

//   } catch (err) {

//     res.render('error', { message: err.message });

//   }
// });

// module.exports = router;