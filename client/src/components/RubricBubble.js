import React, { useEffect, useState } from "react"
import { Radio, RadioGroup, FormLabel, FormControlLabel } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    feedbackRadioContainer: {
        display: "flex",
    },
    feedbackRadioGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
    },
    overallScoreRadioGroup: {
        display: "flex",
        flexDirection: "row"
    }
}
))

export default function RubricBubble(props) {


    const classes = useStyles();

    function getOneToNumber(number) {
        let numbers = [];
        for (let i = 1; i < number + 1; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    let columns = getOneToNumber(props.numColumns)

    return (
        <RadioGroup
            className={classes.feedbackRadioGroup}
            name={props.name}
            value={props.score}
            onChange={props.onChange}>
            <FormLabel component="label">{props.leftLabel}</FormLabel>
            {columns.map((column) => (
                props.columnLabelToggle ?
                    <FormControlLabel
                        labelPlacement="top"
                        value={column.toString()}
                        control={<Radio color="primary" />}
                        label={column} />
                    :
                    <FormControlLabel
                        labelPlacement="top"
                        value={column.toString()}
                        control={<Radio color="primary" />}
                    />
            ))}
            <FormLabel component="label">{props.rightLabel}</FormLabel>
        </RadioGroup>
    )
}


