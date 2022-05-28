const Image = require("@models/image");
const upload = require("../uti/upload");
const uploadImage = upload.single("image");

exports.addImage = async (req, res) => {
     uploadImage(req, res, async function(err){
        try {
            const newImage = new Image(req.body);
            console.log();
            await newImage.save();
            res.status(200).send({ newImage, msg: "image uploaded" });
          } catch (error) {
            console.log(error);
          }
    })
};  //7el el browser

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
