import { Schema, model } from 'mongoose';

const bookmarkSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Idea must have a title'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    iconURL: {
      type: String,
    },
    keywords: [String],
    url: {
      type: String,
      required: [true, 'Bookmark should have a URL'],
    },
    tags: [String],
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export default model('Bookmark', bookmarkSchema);
