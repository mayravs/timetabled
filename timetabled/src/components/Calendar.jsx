import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event color='blue'/>
                        <Event event='Work 👩‍💻' color='blue'/>
                        <Event color='blue'/>
                        <Event event='Work 👩‍💻' color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Lunch 🍽' color='green'/>
                        <Event color='green'/>
                        <Event event='Lunch 🍽' color='green'/>
                        <Event color='green'/>
                        <Event event='Lunch 🍽' color='green'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event='Gym 🏋️‍♀️' color='pink' description='Legs'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event color='pink'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <Event color='blue'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Gym 🏋️‍♀️' color='pink' description='Back + Biceps'/>
                        <Event event='Gym 🏋️‍♀️' color='pink' description='Chest + Triceps'/>
                        <td></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event color='pink'/>
                        <Event color='pink'/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;