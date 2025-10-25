import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISecret extends Document {
  content: string;
  category: string;
  views: number;
  likes: number;
  createdAt: Date;
  isDeleted: boolean;
  userId: string;
}

const SecretSchema = new Schema<ISecret>(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      max: 5000,
      minLength: 1,
    },
    category: {
      type: String,
      enum: ["confession", "thought", "story", "question", "other"],
      default: "other",
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true, // for createdAt and updatedAt
  }
);

export const ISecret: Model<ISecret> = mongoose.model<ISecret>(
  "Secret",
  SecretSchema
);
