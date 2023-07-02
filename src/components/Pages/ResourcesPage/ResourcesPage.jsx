import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JournalButton from '../../JournalModal/JournalButton';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
// import EditIcon from '@mui/icons-material/Edit';

const Container = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: 'black',
  padding: theme.spacing(2),
  paddingBottom: '60px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#000000',
  textDecoration: 'none',
}));

const StyledTableContainer = styled(TableContainer)({
  maxHeight: '300px',
  marginBottom: '2rem',
  backgroundColor: 'lightpink',  // Semi-transparent white
  overflow: 'auto'
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: 'lightpink',  // light pink
  '&:last-child': {
    backgroundColor: 'lightpink',  // light pink
    '& .MuiIconButton-root': {
      backgroundColor: 'lightpink', // light pink
    }
  },
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'black', // Change text color
  },
  '& .Mui-focused': {
    color: 'black', // Keep text color black on focus
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'black', // Change underline color
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black', // Keep underline color black on focus
  },
  '&:hover .MuiInput-underline:before': {
    borderBottomColor: 'black', // Change underline color on hover
  },
  backgroundColor: 'lightpink',  // Adding a light grey color for the TextField background

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: 'lightpink', // Same color as the TextField background
  },
  '& .MuiFilledInput-root': {
    backgroundColor: 'lightpink', // Same color as the TextField background
  }
});

const ResourcesPage = () => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resources);
  const [newResource, setNewResource] = useState({
    resource_type: '',
    resource_description: '',
    resource_link: ''
  });

  const [openTables, setOpenTables] = useState({
    depression: false,
    anxiety: false,
    stress: false,
    suicide: true // Initially open the suicide prevention resources section
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewResource((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString();

    // Add SweetAlert
    Swal.fire({
      title: 'Resource added successfully!',
      icon: 'success'
    });

    const newResourceWithDate = {
      ...newResource,
      createdate: currentDate
    };
    // Dispatch an action to add the new resource to the Redux store
    dispatch({ type: 'ADD_RESOURCE', payload: newResourceWithDate });
    // Reset the form inputs
    setNewResource({
      resource_type: '',
      resource_description: '',
      resource_link: ''
    });
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_RESOURCES' });
  }, [dispatch]);


  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Only dispatch the delete action if the user confirms
        dispatch({ type: 'DELETE_RESOURCE', payload: id });

        Swal.fire(
          'Deleted!',
          'Your resource has been deleted.',
          'success'
        )
      }
    });
  };

  const toggleTable = (resourceType) => {
    setOpenTables(prevState => ({
      ...prevState,
      [resourceType]: !prevState[resourceType]
    }));
  };

  const createResourceTable = (resourceType) => {
    if (!openTables[resourceType]) {
      return null;
    }

    const filteredResources = resources.filter((resource) => resource.resource_type === resourceType);

    return (
      <StyledTableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>{resourceType} Resources</StyledTableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell component="th" scope="row">
                  <a href={resource.resource_link} target="_blank" rel="noopener noreferrer">
                    {resource.resource_description}
                  </a>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(resource.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    );
  };

  const suicideResources = resources.filter((resource) => resource.resource_type === 'suicide');


  const additionalLinks = {
    depression: [
      {
        title: 'Depression - Mayo Clinic',
        link: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
        description: 'Learn about symptoms and causes of depression from Mayo Clinic.',
      },
      {
        title: 'Depression - National Institute of Mental Health',
        link: 'https://www.nimh.nih.gov/health/topics/depression/index.shtml',
        description: 'Comprehensive information about depression from the National Institute of Mental Health.',
      },
      {
        title: 'Depression - Cleveland Clinic',
        link: 'https://my.clevelandclinic.org/health/diseases/9290-depression',
        description: 'Overview of depression and available treatment options from the Cleveland Clinic.',
      },
      {
        title: 'Depression - National Institute of Mental Health',
        link: 'https://www.nimh.nih.gov/health/topics/depression',
        description: 'Comprehensive information about depression from the National Institute of Mental Health.',
      },
      {
        title: 'Mental Health by the Numbers - NAMI',
        link: 'https://www.nami.org/mhstats',
        description: 'Statistics and facts about mental health, including depression, from the National Alliance on Mental Illness.',
      },
    ],
    anxiety: [
      {
        title: 'Anxiety - Mayo Clinic',
        link: 'https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961',
        description: 'Explore symptoms and causes of anxiety according to Mayo Clinic.',
      },
      {
        title: 'Anxiety Disorders - National Institute of Mental Health',
        link: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml',
        description: 'Comprehensive information about anxiety disorders from the National Institute of Mental Health.',
      },
      {
        title: 'Anxiety - Cleveland Clinic',
        link: 'https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders',
        description: 'Overview of anxiety disorders and available treatment options from the Cleveland Clinic.',
      },
      {
        title: 'Anxiety - MedlinePlus',
        link: 'https://medlineplus.gov/anxiety.html',
        description: 'Information about anxiety from MedlinePlus, a trusted source of health information.',
      },
      {
        title: 'Improving Mental Health - MedlinePlus',
        link: 'https://medlineplus.gov/howtoimprovementalhealth.html',
        description: 'Tips and resources for improving mental health from MedlinePlus.',
      },
    ],
    stress: [
      {
        title: 'Stress - Mayo Clinic',
        link: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/basics/stress-basics/hlv-20049495',
        description: 'Get basic information about stress management from Mayo Clinic.',
      },
      {
        title: 'Stress - Cleveland Clinic',
        link: 'https://my.clevelandclinic.org/health/articles/11874-stress',
        description: 'Information about stress and its impact from the Cleveland Clinic.',
      },
      {
        title: 'Perceived Stress Scale (PSS)',
        link: 'https://www.das.nh.gov/wellness/Docs%5CPercieved%20Stress%20Scale.pdf',
        description: 'Download the Perceived Stress Scale for assessing stress levels.',
      },
      {
        title: 'Stress Management - American Heart Association',
        link: 'https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management',
        description: 'Learn about stress management techniques and strategies from the American Heart Association.',
      },
      {
        title: 'Mental Illness - Statistics - National Institute of Mental Health',
        link: 'https://www.nimh.nih.gov/health/statistics/mental-illness',
        description: 'Explore statistics related to mental illness, including stress, from the National Institute of Mental Health.',
      },
    ],
  };
  const renderAdditionalLinks = (category) => {
    return (
      <Box>
        {additionalLinks[category].map((link, index) => (
          <Typography key={index} variant="body1">
            <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <Container>
      <Typography variant="h1" sx={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        Your Mental Health Toolkit
      </Typography>
      <JournalButton />
      <Typography variant="body1" sx={{ fontSize: '1.5rem', fontStyle: 'italic', textAlign: 'center', marginTop: '2rem' }}>
        "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
      </Typography>
      <Box>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            name="resource_type"
            label="Resource Type"
            value={newResource.resource_type}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            name="resource_description"
            label="Resource Description"
            value={newResource.resource_description}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            name="resource_link"
            label="Resource Link"
            value={newResource.resource_link}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ '&:hover': { backgroundColor: 'green' } }}>
            Add Resource
          </Button>
        </form>
      </Box>
      <Box>
        <StyledButton onClick={() => toggleTable('depression')}>
          Depression
        </StyledButton>
        {openTables['depression'] && createResourceTable('depression')}
        {renderAdditionalLinks('depression')}

        <StyledButton onClick={() => toggleTable('anxiety')}>
          Anxiety
        </StyledButton>
        {openTables['anxiety'] && createResourceTable('anxiety')}
        {renderAdditionalLinks('anxiety')}

        <StyledButton onClick={() => toggleTable('stress')}>
          Stress
        </StyledButton>
        {openTables['stress'] && createResourceTable('stress')}
        {renderAdditionalLinks('stress')}

        <Typography variant="h2" sx={{ marginBottom: '2rem', marginTop: '2rem' }}>
          You Are Not Alone
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>National Suicide Prevention Lifeline: 1-800-273-8255</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>Crisis Text Line: Text "HOME" to 741741</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>Veterans Crisis Line: 1-800-273-8255 (Press 1)</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>LGBT National Help Center: 1-888-843-4564</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>TrevorLifeline (LGBTQ+): 1-866-488-7386</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>Trans Lifeline: 1-877-565-8860</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ResourcesPage;