import { Button } from "@nextui-org/react";

interface ReserveButtonProps {
    sport: string;
    imageUrl: string;
    onClick: () => void;
}

const ReserveButton: React.FC<ReserveButtonProps> = ({ sport, imageUrl, onClick }) => {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
            src={imageUrl}
            alt={sport}
            style={{ width: '200px', height: '120px', objectFit: 'cover', marginBottom: '10px' }} // Ajusta el tamaño según sea necesario
        />
    <Button onPress={onClick} color="primary">
        Reserve {sport} Court
    </Button>
    </div>
    );
};

export default ReserveButton;
