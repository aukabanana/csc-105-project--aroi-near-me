import multer from "multer";

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/img");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });