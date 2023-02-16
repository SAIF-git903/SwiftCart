import { View } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rating = ({ rating, count }) => {
    const stars = Array.from({ length: rating }, (_, i) => i);

    return (
        <>
            <View style={{ flexDirection: "row" }}>
                {stars.map((_, i) => (
                    <FontAwesome key={i} name="star" color="goldenrod" size={18} />
                ))}
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text>{rating}</Text>
                <Text> ratings</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>Sold : </Text>
                <Text>{count}</Text>
            </View>
        </>
    );
};

export default Rating;