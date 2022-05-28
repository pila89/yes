const Image = require("@models/image");
const upload = require("../uti/upload");
const uploadImage = upload.single("image");

exports.addImage = async (req, res) => {
  uploadImage(req, res, async function (err) {
    if (err) {
      res.status(404).json({ image: err.message });
    } else {
      const image = {
        title: req.body.title,
        image: req.file.filename,
        path: process.env.BASE_URL + "/images" + req.file.filename,
      };
      await Image.create(image);
      await Image.find().then((result) => {
        res.status(200).json(result);
      });
    }
  });
  const newImage = new Image(req.body);
  await newImage.save();
  res.status(200).send({ newImage, msg: "image uploaded" });

}; 

// exports.findImage=async (req, res) =>
//  {try {
//       let result = await Image.findByIdAndRemove({ _id: req.params.id });

//      res.send( "image found");
//     } catch (error) {
//    console.log(error);
//      }};

//  exports.deleteImage=async (req, res) =>
//  {try {
//        let result = await Image.findByIdAndRemove({ _id: req.params.id });

//       res.send( "image deleted");
//      } catch (error) {
//     console.log(error);
//       }};
