import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export const ProfileScreen = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSubmit = () => {
        // Validate form
        if (formData.password !== formData.confirmPassword) {
            alert('Паролі не співпадають');
            return;
        }
        
        // Submit form data
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Реєстрація</Text>
            
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Пароль</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть пароль"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Повторіть пароль</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть пароль ще раз"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Ім'я</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть ваше ім'я"
                    value={formData.firstName}
                    onChangeText={(text) => handleChange('firstName', text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Прізвище</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть ваше прізвище"
                    value={formData.lastName}
                    onChangeText={(text) => handleChange('lastName', text)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});