import React from "react";
import {Card,
CardHeader, 
Avatar, 
CardContent,
Typography,
makeStyles,
Button,
CardMedia} from '@material-ui/core';



const useStyles = makeStyles({
  card:
  {
    marginBottom: 20 
  },
  media: {
    height: 360,
  },
  cardContent:
  {
    padding: '24px'
  }
})


function Article(props) {

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
            <Typography variant='h5'>
                <p>{props.title}</p>
            </Typography>
            <div hidden={props.image == null }>
            <CardMedia
              alt="Loading...."
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            </div>
            <Typography variant='h6'>
              <div className="content">
                <p>{props.extract}</p>
              </div>
            </Typography>
            <CardHeader
              avatar={
                <Avatar src={props.profile}/>
              }
              action={
                <Button href={props.url} size='small' variant="contained" color="primary">
                 full article
              </Button>
              }
              title={props.author}
              subheader={props.date}
            />
        </CardContent>
      </Card>
    </div>
  );
}

export default Article;
