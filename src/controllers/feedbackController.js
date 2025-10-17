let feedback = [
  {
    id: 1,
    name: "vishal",
    comment: "neeeer",
    
  }
];

export const getFeedback = async ( req, res) => {
    try {
          res.status(200).json({
        success: true,
        message: "FeedBacks successfull",
        data: feedback
    })
    } catch (error) {
          res.status(400).json({
        success: false,
        message: "Error Retriving FeedBack",
        error: error.message
    })
    }
   
}

export const createFeedback = async( req, res) => {

    try {
         const { name , comment } = req.body;

      if (!name || !comment) {
    return res.status(400).json({ message: "Name and comment are required" });
  }

  const newFeedback = {
    id: feedback.length + 1,
    name,
    comment,
    createdAt: new Date(),
  };

    feedback.push(newFeedback);

    res.status(201).json(newFeedback);

    } catch (error) {
           res.status(400).json({
        success: false,
        message: "Error Retriving FeedBack",
        error: error.message
    })
    }
   }
